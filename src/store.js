import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  imgUrl: "http://127.0.0.1:8000/storage/",

  getFilePath(fileFolder, filePath, fileExtension) {
    return new URL(
      "./assets/" + fileFolder + "/" + filePath + "." + fileExtension,
      import.meta.url
    ).href;
  },
});
