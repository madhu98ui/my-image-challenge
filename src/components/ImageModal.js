import React, { useState } from 'react';
import { Modal, Image } from 'semantic-ui-react';

const ImageModal = ({ image }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image src={image.links[0].href} size="small" />}
    >
      <Modal.Content>
        <Image src={image.links[0].href} size="large" />
        <p>{image.data[0].description}</p>
      </Modal.Content>
    </Modal>
  );
};

export default ImageModal;