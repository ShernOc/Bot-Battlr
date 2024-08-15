const BotDetails = ({ bot, onAdd }) => {
  const {
    avatar_url,
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
  } = bot || {};

  const enlist = (id) => {
    onAdd(id);
  };

  return (
    <section>
      <h2>Bot Details</h2>
      {bot ? (
        <div className="bot">
          <img src={avatar_url} alt="" className="img" />
          <div className="info">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Bot Class: {bot_class}</p>
            <p>Cathphrase: {catchphrase}</p>
            <button
              onClick={(event) => {
                event.stopPropagation();
                enlist(id);
              }}
            >
              Enlist
            </button>
          </div>
        </div>
      ) : (
        <p>
          No Bot selected. Select one from the collection to display
          information.
        </p>
      )}
    </section>
  );
};

export { BotDetails };
