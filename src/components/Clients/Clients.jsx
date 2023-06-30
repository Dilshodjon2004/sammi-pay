import { clients } from "../../util/constants";
import { styles } from "../../util/style";
import ClientCard from "../ClientCard/ClientCard";

const Clients = () => {
  return <div className={`${styles.flexStart} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {
        clients.map(client => (
          <ClientCard key={client.id} logo={client.logo} />
        ))
      }
    </div>
  </div>;
};

export default Clients;
