import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  endpoint: `https://${process.env.DO_SPACES_ENDPOINT}`,
  region: "us-east-1", // DO Spaces uses us-east-1 for compatibility
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY || "",
    secretAccessKey: process.env.DO_SPACES_SECRET || "",
  },
});

export async function uploadToSpaces(file: Blob | File, path: string) {
  try {
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.DO_SPACES_NAME,
        Key: path,
        Body: file,
        ACL: "public-read",
        ContentType: file.type,
      },
    });

    await upload.done();
    
    // Construct the public URL
    return `https://${process.env.DO_SPACES_NAME}.${process.env.DO_SPACES_ENDPOINT}/${path}`;
  } catch (error) {
    console.error("S3 Upload Error:", error);
    throw error;
  }
}
