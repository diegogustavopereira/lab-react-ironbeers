import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewBeer.css";

function NewBeer({ apiURL, form, setForm }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiURL}/new`, form);
      console.log("Cadastro feito!");
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pageForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tagline"
            name="tagline"
            onChange={handleChange}
            value={form.tagline}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First brewed</Form.Label>
          <Form.Control
            type="text"
            placeholder="First brewed"
            name="first_brewed"
            onChange={handleChange}
            value={form.first_brewed}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brewers tips</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brewers tips"
            name="brewers_tips"
            onChange={handleChange}
            value={form.brewers_tips}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Attenuation level</Form.Label>
          <Form.Control
            type="number"
            placeholder="Attenuation level"
            name="attenuation_level"
            onChange={handleChange}
            value={form.attenuation_level}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contributed by</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contributed by"
            name="contributed_by"
            onChange={handleChange}
            value={form.contributed_by}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewBeer;
