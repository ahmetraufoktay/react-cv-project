/* eslint-disable react/prop-types */
import "./generalinformation.css";

function GeneralInformation({ data, handlePerson, handleImg }) {
  return (
    <section className="general">
      <h2 className="blockTitle">General Information </h2>

      <div className="content">
        <label htmlFor="firstname">
          <h3>First Name</h3>
          <input
            type="text"
            name="firstname"
            placeholder="Example: John"
            id="firstname"
            value={data.person[0].text}
            onChange={handlePerson}
          />
        </label>
        <label htmlFor="surname">
          <h3>Surname</h3>
          <input
            type="text"
            name="surname"
            placeholder="Example: Doe"
            id="surname"
            value={data.person[1].text}
            onChange={handlePerson}
          />
        </label>
        <label htmlFor="email">
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Example: example@email.com"
            id="email"
            value={data.person[2].text}
            onChange={handlePerson}
          />
        </label>

        <label htmlFor="telephone">
          <h3>Phone Number</h3>
          <input
            type="tel"
            name="number"
            id="telephone"
            placeholder="Example: +1 (XXX) XXX-XXXX"
            value={data.person[3].text}
            onChange={handlePerson}
          />
        </label>

        <label htmlFor="address">
          <h3>Address</h3>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Example: Istanbul, Turkey"
            value={data.person[4].text}
            onChange={handlePerson}
          />
        </label>
        <label htmlFor="file">
          <h3>Image</h3>
          <input type="file" id="file" name="image" onChange={handleImg} />
        </label>
      </div>
    </section>
  );
}

export default GeneralInformation;
