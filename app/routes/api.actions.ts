import { json, type ActionArgs } from "@remix-run/node";
import {
  clean,
  colorise,
  deblur,
  instructions,
  lighten,
  removebg,
} from "libs/replicate";

const actions: {
  [key: string]: (image: string, params?: any) => Promise<object>;
} = {
  clean,
  colorise,
  deblur,
  lighten,
  removebg,
  instructions,
};

export const action = async ({ request }: ActionArgs) => {
  const data = await request.json();
  const file = data.file;
  const action = data.action;
  const params = data.params;
  if (file && action) {
    const actionFn = actions[action];
    if (actionFn) {
      const result = await actionFn(file, params);
      return json({ result });
    } else {
      return json({ error: "Action not found" }, { status: 404 });
    }
  }
};
