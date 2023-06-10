import Replicate from "replicate";

const replicateClient = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export const clean = async (image: string) => {
  const version =
    "c75db81db6cbd809d93cc3b7e7a088a351a3349c9fa02b6d393e35e0d51ba799";
  const input = {
    image,
  };
  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const colorise = async (image: string) => {
  const version =
    "0da600fab0c45a66211339f1c16b71345d22f26ef5fea3dca1bb90bb5711e950";
  const input = {
    input_image: image,
    model_name: "Artistic",
  };
  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const deblur = async (image: string) => {
  const version =
    "494ca4d578293b4b93945115601b6a38190519da18467556ca223d219c3af9f9";
  const input = {
    model: "Image Deblurring (GoPro)",
    image,
  };
  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const lighten = async (image: string) => {
  const version =
    "4328e402cfedafa70ad7cec04412e86ab61832204deccd94108ae5222c9b1ae1";
  const input = {
    image,
  };

  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const removebg = async (image: string) => {
  const version =
    "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003";

  const input = {
    image,
  };

  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const instructions = async (image: string, prompt: string) => {
  const version =
    "30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f";
  const input = {
    image,
    prompt,
  };

  const res = await replicateClient.predictions.create({
    version,
    input,
  });
  return res;
};

export const status = async (id: string) => {
  const res = await replicateClient.predictions.get(id);
  return res;
};
