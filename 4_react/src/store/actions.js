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
export const saveFolderAction = async (dispatch, folderName, pinId) => {
  dispatch(saveFolderInitAction());
  await sleep(1000);
  const newFolder = await pinService.saveFolder(folderName); // Sava no localStorage
  const folder = await pinService.savePinInFolder(newFolder.id, pinId); // Salva o pin dentro da pasta que esta sendo criada
  dispatch(saveFolderSuccessAction(folder));
};

// SAVE PIN IN FOLDER
export const savePinInFolderInitAction = () => ({
  type: types.savePinInFolderInitType,
});
export const savePinInFolderSuccessAction = (folders) => ({
  type: types.savePinInFolderSuccessType,
  payload: folders,
});
export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
  console.log(pinId, folderId);
  dispatch(savePinInFolderInitAction());
  // Delay 1s
  await sleep(1000);
  await pinService.savePinInFolder(folderId, pinId);
  const folders = await pinService.getFolders();
  dispatch(savePinInFolderSuccessAction(folders));
};

// FETCH PINS
export const fetchPinsInitAction = () => ({
  type: types.fetchPinsInitType,
});
export const fetchPinsSuccessAction = (pinsData) => ({
  type: types.fetchPinsSuccessType,
  payload: pinsData,
});
export const fetchPinsAction = async (dispatch) => {
  dispatch(fetchPinsInitAction());
  // Delay 1s
  await sleep(1000);
  const pinsData = await pinService.getPins();
  dispatch(fetchPinsSuccessAction(pinsData));
};
