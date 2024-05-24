
// eslint-disable-next-line react/prop-types
const Header = ({title}) => {
  return (
    <div className="p-4 mt-10">
      <p className="text-blue-800 text-4xl mb-5">{title}</p>
      <hr />
    </div>
  )
}

export default Header