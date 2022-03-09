import ListItem from "./Listitem";

const List = ({ data, onListItemClick }) => {
   return data?.map(movie => (
     <ListItem key={movie.id} {...movie} onListItemClick={onListItemClick} />
   ));
};

export default List;
