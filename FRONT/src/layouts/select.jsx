import Form from 'react-bootstrap/Form';

function SelectCateg() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Animados</option>
      <option value="1">Cápsulas</option>
      <option value="2">Experiencias</option>
      <option value="3">Programas de TV</option>
      <option value="3">Spots</option>
    </Form.Select>
  );
}

export default  SelectCateg;