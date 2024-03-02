import express, { type Request, type Response } from 'express';
import { constants as httpStatus } from 'http2';
import { CreateUserUseCase } from '../../application/useCases/createUserUseCase';
import { FindOneUserByEmailUseCase } from '../../application/useCases/findOneUserByEmailUseCase';
import { UserRepositoryInMemorySingleton } from '../database/userRepositoryInMemorySingleton';

const app = express();

app.use(express.json());

const port = 3000;

app.get('/users/:email', async (req: Request, res: Response) => {
  const email = req.params.email;
  const userRepository = UserRepositoryInMemorySingleton.getInstance();
  const findOneUserByEmailCommand = new FindOneUserByEmailUseCase(
    userRepository
  );
  const userFound = await findOneUserByEmailCommand.execute(email);

  if (!userFound) {
    res.status(httpStatus.HTTP_STATUS_NOT_FOUND).send();
  }

  res.status(httpStatus.HTTP_STATUS_OK).send(userFound);
});

app.post('/users', async (req: Request, res: Response) => {
  const user = req.body;
  const userRepository = UserRepositoryInMemorySingleton.getInstance();
  const createUserCommand = new CreateUserUseCase(userRepository);
  await createUserCommand.execute(user);
  res.status(httpStatus.HTTP_STATUS_CREATED).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
