/* eslint-disable react/prop-types */
export default function Cards(props) {
  const { id, title, body } = props.post;
  return (
    <div className="bg-white rounded-lg w-[250px] my-5 min-h-[250px]">
      <h3
        onClick={() => props.handleDelete(id)}
        className="w-full text-right text-red-600 p-2 cursor-pointer font-semibold text-[20px]"
      >
        X
      </h3>
      <div className="px-2 pb-2">
        <h3 className="font-bold truncate">{title}</h3>
        <p className="truncate">{body}</p>
        <p className="text-gray-500 pt-2">Mon , 21 Dec 2021 14:57GMT</p>
        <img
          src="https://media.istockphoto.com/id/811843774/photo/indian-mother-and-daughter.jpg?s=1024x1024&w=is&k=20&c=WL7cOTptI_myv9Uo11lxjtd1dKGuHXfdkOt3f5ort78="
          alt="api img"
          className="w-full pt-2 rounded-lg"
        />
      </div>
    </div>
  );
}
