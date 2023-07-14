import * as pinService from "../services/pinService";
import * as types from "./types";

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

// OPEN AND CLOSE MODALS
export const openModalSavePinAction = (pinId) => ({
  type: types.openModalSavePinType,
  payload: pinId,
});
export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType,
});
export const closeModalsAction = () => ({
  type: types.closeModalsType,
});

// FETCH FOLDERS
export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType,
});
export const fetchFoldersSuccessAction = (folders) => ({
  // Recebe as pastas e encaminha para o reduce colocar no state global
  type: types.fetchFoldersSuccessType,
  payload: folders,
});
export const fetchFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction());
  const folders = await pinService.getFolders(); // Captura as pastas do localStorage
  dispatch(fetchFoldersSuccessAction(folders));
};

// SAVE FOLDER
export const saveFolderInitAction = () => ({
  type: types.saveFolderInitType,
});
export const saveFolderSuccessAction = (folder) => ({
  // Recebe a pasta que acabou de ser salva e encaminha para o reduce colocar no state global
  type: types.saveFolderSuccessType,
  payload: folder,
});
export const saveFolderAction = async (dispatch, folderName) => {
  dispatch(saveFolderInitAction());

  // Delay 1s
  await sleep(1000);

  const newFolder = await pinService.saveFolder(folderName); // Sava no localStorage
  dispatch(saveFolderSuccessAction(newFolder));
};
