import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {

    // فرض می‌کنیم دیتای فایل از درخواست میاد (مثلاً از فرم آپلود)
    const { fileName, fileContent } = req.body;

    if (!fileContent || !fileName) {
      return res.status(400).json({ message: "فایل یا محتوا مشخص نشده است" });
    }


    try {

      // مسیر پوشه public
      const publicPath = path.join(process.cwd(), "public");
      const filePath = path.join(publicPath, fileName);

      // نوشتن فایل در پوشه public
      fs.writeFileSync(filePath, fileContent);


      // مسیر ذخیره در سیستم محلی (مثلاً روی دسکتاپ)
      const localPath = path.join(process.env.HOME || process.env.USERPROFILE, 'Desktop', fileName);
      fs.writeFileSync(localPath, fileContent, 'utf8');

      return res.status(200).json({ message: "فایل با موفقیت ذخیره شد!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "خطا در ذخیره فایل", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "فقط متد POST پشتیبانی می‌شه" });
  }
}

// غیرفعال کردن bodyParser برای آپلود فایل‌های بزرگ (اختیاری)
export const config = {
  api: {
    bodyParser: true,
  },
};
