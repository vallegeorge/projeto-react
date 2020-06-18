import React from 'react';
import { FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard:React.FC = () => {
  return (
      <>
        <img src={logoImg} alt="Githuh Explorer" />
        <Title>Explore repositórios no Github</Title>

        <Form>
          <input placeholder="Digite o nome do repositório" />
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          <a href="teste">
            <img
              src="https://avatars3.githubusercontent.com/u/38787894?s=460&v=4"
              alt="George do Valle"
            />
            <div>
              <strong>rocketseat/unform/</strong>
              <p>Easy peasy highly scalable ReacJS & React Native forms!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          <a href="teste">
            <img
              src="https://avatars3.githubusercontent.com/u/38787894?s=460&v=4"
              alt="George do Valle"
            />
            <div>
              <strong>rocketseat/unform/</strong>
              <p>Easy peasy highly scalable ReacJS & React Native forms!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          <a href="teste">
            <img
              src="https://avatars3.githubusercontent.com/u/38787894?s=460&v=4"
              alt="George do Valle"
            />
            <div>
              <strong>rocketseat/unform/</strong>
              <p>Easy peasy highly scalable ReacJS & React Native forms!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        </Repositories>
      </>
    );
}

export default Dashboard;
