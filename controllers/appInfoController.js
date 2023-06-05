import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addAppInfo = async (req, res) => {
  try {
    const response = await prisma.appInfo.create({
      data: req.body,
    });

    res.status(200).json({
      status: true,
      message: "App Info Added Successfully!",
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

export const getAllAppInfo = async (_, res) => {
  try {
    const response = await prisma.appInfo.findMany();
    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "App Info Not Found!"
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved All App Info!",
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