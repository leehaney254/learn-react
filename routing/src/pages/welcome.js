import '../index.css'
import { Route, Routes } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="main">
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path='/welcome/new-user' element={<p>Welcome</p>} />
      </Routes>
    </section>
  )
};

export default Welcome;