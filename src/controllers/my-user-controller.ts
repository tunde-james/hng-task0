import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response) => {
  try {
    const response = {
      email: 'tundejames04@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/tunde-james/hng-task0',
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default { getUser };
