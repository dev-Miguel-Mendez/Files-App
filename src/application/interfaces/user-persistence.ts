export type UserPersistence = {
  id: string;
  email: string;
  password: string
  credits: number;      // if you persist it; otherwise compute on reconstruct
};

