import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addExperience = async (req, res) => {
  try {
    const { name, from, to, job, type, responsibilities } = req.body;
    const response = await prisma.experience.create({
      data: {
        name,
        from: new Date(from),
        to,
        job,
        type,
        responsibilities,
      },
    });

    res.status(200).json({
      status: true,
      message: "Experience Added Successfully!",
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

export const getAllExperiences = async (_, res) => {
  try {
    const response = await prisma.experience.findMany();
    if (response.length <= 0) {
      res.status(404).json({
        success: false,
        message: "Experiences Not Found!"
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Retrieved All Experiences!",
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