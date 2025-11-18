import { Request, Response } from "express";
import dayjs from 'dayjs';
import { EduListItem, EduSchInfo, PageListContext } from '../../shared/edu';
import { queryLibLabel, queryEduSch } from '../../shared/queries';

// @POST /api/edulist 
// 교육 리스트
async function GetEduList(req: Request, res: Response) {
  const { site_code, account_code, page_no = 1, page_size = 10 } = req.body;

  try {
    const items = await queryEduSch(site_code, account_code);
    const totalCount = items.length;

    // for paging
    const size = Math.max(1, Number(page_size) || 10);
    const page_total = Math.max(1, Math.ceil(totalCount / size));
    const page = Math.min(Math.max(1, Number(page_no) || 1), page_total);

    // fixed block
    const blockSize = 10;
    const currentBlock = Math.ceil(page / blockSize);
    const page_start = (currentBlock - 1) * blockSize + 1;
    const page_end = Math.min(currentBlock * blockSize, page_total);
    

    // slice
    const offset = (page - 1) * size;
    let no = 1;
    const pagedItems: EduListItem[] = await Promise.all(
      (items as EduSchInfo[]).slice(offset, offset + size)
        .map(async (item: EduSchInfo): Promise<EduListItem> => {
          const edu_type = await queryLibLabel('EDU_TYPE', item.type_code) ?? "";
          const const_type = await queryLibLabel('CONST_TYPE', item.const_type_code) ?? "";

          return {
            no: no++,
            edu_sch_code: item.code,
            edu_code: item.edu_code,
            edu_contents_code: item.edu_contents_code,
            edu_type, 
            const_type, 
            subject: item.subject,
            exp_begin: item.exp_begin,
            exp_end: item.exp_end,
            reg_dt: dayjs(item.reg_dt).format("YYYY.MM.DD"),
            movie_url: item.file_path,
            filename: item.file_name,
            thumbnail: item.thumbnail
          }
        })
    );
    
    const result: PageListContext<EduListItem> = {
      page_no: page,
      page_size: size,
      page_total,
      page_start,
      page_end,
      item_total: totalCount,
      items: pagedItems,
      download_url: null,
      download_url2: null,
      stime: null,
      etime: null
    };
    
    return res.status(200).json({ ...result });
    
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduList;