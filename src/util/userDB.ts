export const user = {
  username: "Dieferson",
  password: "teste123",
};

export const userDetails: UserEntity = {
  username: "Dief",
  firstName: "Dieferson",
  lastName: "Soares",
  email: "diefersonfrontenddeveloper@gmail.com",
};

export interface UserEntity {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
