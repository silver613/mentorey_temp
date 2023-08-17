"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Divider } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { nanoid } from "nanoid";
import { getFileExtension } from "~/utils/utils";
import { toast } from "react-toastify";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({
  region: "us-west-2",
  credentials: {
    accessKeyId: "AKIA3WFV2SULDNNESNDC",
    secretAccessKey: "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",
  },
});

const VideoUploader = ({
  uploading,
  setUploading,
  sendVideoName,
}: {
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  sendVideoName: (data: string) => void;
}) => {
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  // const [uploading, setUploading] = useState<boolean>(false);
  const [videoFile, setVideoFile] = useState<File | undefined>(undefined);
  const [videoKey, setVideoKey] = useState<number>(0);
  const [videoName, setVideoName] = useState<string>("");

  function getVideo() {
    videoInputRef.current?.click();
  }

  async function uploadVideo(event: React.ChangeEvent<HTMLInputElement>) {
    const video = event.target.files?.[0];

    if (video) {
      const command = new PutObjectCommand({
        Bucket: "mentorey",
        Key: `${nanoid()}.${getFileExtension(video.name)}`,
        Body: video,
      });

      console.log(command);
      try {
        const response = await client.send(command);
        console.log(response);
      } catch (err) {
        console.error(err);
      }

      // Storage.remove(videoName, { level: "public" });
      // Storage.put(nanoid() + "." + getFileExtension(video.name), video, {
      //   level: "public",
      // })
      //   .then((res) => {
      //     setVideoFile(video);
      //     setVideoKey(videoKey + 1);
      //     setUploading(false);
      //     sendVideoName(res.key);
      //     setVideoName(res.key);
      //     toast.success("Video is uploaded successfully");
      //   })
      //   .catch((err) => {
      //     toast.error("Network error! Please try again.");
      //     console.log(err);
      //   });
    }
  }
  return (
    <>
      <Box className="my-4">
        <input
          type="file"
          accept="video/mp4, video/webm"
          hidden
          ref={videoInputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            uploadVideo(e);
          }}
        />
        <LoadingButton
          className="mx-auto flex"
          onClick={getVideo}
          loading={uploading}
          loadingPosition="start"
          startIcon={<CloudUploadIcon />}
          variant="outlined"
          size="large"
        >
          {uploading || !videoFile ? (
            uploading ? (
              <span>Uploading</span>
            ) : (
              <span>Upload Video</span>
            )
          ) : (
            <span>Change Video</span>
          )}
        </LoadingButton>
        <div className="w-full p-8" hidden={!videoFile}>
          <video key={videoKey} controls className="h-auto w-full">
            {videoFile && (
              <source
                src={URL.createObjectURL(videoFile)}
                type={videoFile?.type}
              />
            )}
          </video>
        </div>
      </Box>
    </>
  );
};

export default VideoUploader;
