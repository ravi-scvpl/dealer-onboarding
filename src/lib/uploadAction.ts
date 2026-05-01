'use server';

import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  endpoint: `https://${process.env.DO_SPACES_ENDPOINT}`,
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY || "",
    secretAccessKey: process.env.DO_SPACES_SECRET || "",
  },
});

export async function uploadImageAction(formData: FormData, path: string) {
  try {
    const file = formData.get('file') as File;
    if (!file) throw new Error("No file provided");

    const buffer = Buffer.from(await file.arrayBuffer());

    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.DO_SPACES_NAME,
        Key: path,
        Body: buffer,
        ACL: "public-read",
        ContentType: file.type,
      },
    });

    await upload.done();
    
    return { 
      success: true, 
      url: `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT}/${path}` 
    };
  } catch (error: any) {
    console.error("S3 Upload Error:", error);
    return { success: false, error: error.message };
  }
}
