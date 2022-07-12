import type { NextApiResponse } from 'next'

const errorHandler = async (
  err: string,
  res: NextApiResponse,
) => {
  res.status(500).json({
    code: 500,
    msg: err,
  });
}

export { errorHandler };