import type { ModalProps } from '../Modal/Modal';
import { Modal } from '../Modal/Modal';

import { PokemonModalContent } from './PokemonModalContent/PokemonModalContent';
import { FC } from 'react';

interface PokemonModalProps extends Omit<ModalProps, 'children' | 'loading'> {
  pokemonId: Pokemon['id'] | null;
}

export const PokemonModal: FC<PokemonModalProps> = ({ pokemonId, onClose, ...props }) => (
  <Modal {...props} onClose={onClose}>
    {pokemonId && <PokemonModalContent pokemonId={pokemonId} onClose={onClose} />}
  </Modal>
);
