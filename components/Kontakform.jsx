import { useState } from "react";

const KontaktForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Eingabe-Handling
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formular absenden
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/kontakt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      setSuccessMessage("Deine Nachricht wurde erfolgreich gesendet!");
      setFormData({ name: "", email: "", nachricht: "" });
    } else {
      alert(result.error);
    }
  };

  return (
    <div>
      <h2>Kontakt</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Dein Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Deine E-Mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="nachricht"
          placeholder="Deine Nachricht"
          value={formData.nachricht}
          onChange={handleChange}
          required
        />
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default KontaktForm;
