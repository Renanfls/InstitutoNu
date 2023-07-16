/** Metodos
 * getFolders()
 * saveFolders()
 * savePinInFolder()
 */

const generateId = () => {
  return `${Math.floor(Math.random() * 100_000).toString(16)}-${Math.floor(
    Math.random() * 100_000
  ).toString(16)}`;
};

const saveFolders = async (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

export const saveFolder = async (folderName) => {
  /** Passo a passo
   * Pegar lista/array de pastas -> getFolders()
   * Adicionar a pasta dentro desse array
   * Salvar novamente no localStorage
   */

  // Pegar lista/array de pastas -> getFolders()
  const folders = await getFolders();

  const newFolder = {
    id: generateId(),
    name: folderName,
    pins: [],
  };

  // Adicionar a pasta dentro desse array
  folders.push(newFolder);

  // Salvar novamente no localStorage
  await saveFolders(folders);

  return newFolder;
};

export const savePinInFolder = async (folderId, pinId) => {
  /** Passo a passo
   * Listar coleção/array de pastas do Storage
   * Encontrar a pasta que queremos adicionar o pin
   * Adicionar o pinId na pasta
   * Salvar pastas no localStorage novamente
   */

  // Listar coleção/array de pastas do Storage
  const folders = await getFolders();

  // Encontrar a pasta que queremos adicionar o pin
  const folderIndex = folders.findIndex((folder) => {
    return folder.id === folderId;
  });

  // Adicionar o pinId na pasta
  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }

  // Salvar pastas no localStorage novamente
  await saveFolders(folders);

  return { ...folders[folderIndex] };
};

export const getPins = async () => {
  return [
    {
      id: "122",
      title: "Css",
      image: "https://picsum.photos/200/135?53",
      total: 0,
    },
    {
      id: "133",
      title: "JS",
      image:
        "https://picsum.photos/200/135?33",
      total: 0,
    },
    {
      id: "144",
      title: "React JS",
      image:
        "https://picsum.photos/200/135?23",
      total: 0,
    },
  ];
};
