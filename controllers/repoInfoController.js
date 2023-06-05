import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addRepoInfo = async (req, res) => {
  try {
    const response = await prisma.repoInfo.create({
      data: req.body,
    });

    res.status(200).json({
      status: true,
      message: "Repo Info Added Successfully!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};

export const getAllRepoInfo = async (_, res) => {
  try {
    const response = await prisma.repoInfo.findMany();
    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "Repo Info Not Found!"
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved All Repo Info!",
        response,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please Try Again!",
      error: error.message,
    });
  }
};