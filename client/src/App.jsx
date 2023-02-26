import './App.css'

function App() {

  return (
    <div className="App">
<div className="navbar bg-base-200">
  <div className="flex-1">
    <a className='flex justify-center items-center'><img className="w-14 mr-2" src="/src/assets/images/quizcraft_logo_transparent.png" /> <span className='normal-case text-2xl'>Quizcraft</span></a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/428/428573.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52">
        <li><a>Profile</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default App
