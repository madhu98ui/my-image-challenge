import React from 'react';
import { Table } from 'semantic-ui-react';
import ImageModal from './ImageModal';

const ImageTable = ({ images }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Thumbnail</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>NASA Center</Table.HeaderCell>
          <Table.HeaderCell>Date Created</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {images.map((image) => (
          <Table.Row key={image.data[0].nasa_id}>
            <Table.Cell>
              <ImageModal image={image} />
            </Table.Cell>
            <Table.Cell>{image.data[0].title}</Table.Cell>
            <Table.Cell>{image.data[0].center}</Table.Cell>
            <Table.Cell>{image.data[0].date_created}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ImageTable;