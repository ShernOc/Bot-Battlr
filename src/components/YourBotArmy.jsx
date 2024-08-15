const YourBotArmy = ({ armyList, onRelease }) => {
  const release = (id) => {
    onRelease(id);
  };

  return (
    <section>
      <h2>Army</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Avatar</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {armyList.map(({ id, name, avatar_url }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img className="img" src={avatar_url} alt="" />
              </td>
              <td>
                <button onClick={() => release(id)}>Release</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export { YourBotArmy };
