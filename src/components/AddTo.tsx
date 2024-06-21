type Student {
    students: string,
}
import './AddTo.css'
const AddTo = () => {
    function addStudent() {
        const student: Student = {
          id: students.length + 1,
          firstName: firstName.value,
          lastName: lastName.value,
          group: group.value,
          dateOfBirth: dateOfBirth.value,
          filterLevel: filterLevel.value,
          typeOfJob: typeOfJob.value,
          salary: salary.value,
          isMarried: isMarried.checked,
        };
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
        location.reload();
      
        firstName.value = "";
        lastName.value = "";
        group.value = "";
        dateOfBirth.value = "";
        filterLevel.value = "";
        typeOfJob.value = "";
        salary.value = "";
        isMarried.checked = false;
      }
      btnAddStudent.addEventListener("click", addStudent);

  return (


    <div className='AllInOne'>
        <div className='first'>
        <h1 className='info'>Add Information About Yourself </h1>
        <form>
            <div className='inputName'>
                <label className='labelOne' htmlFor="firstName">FirstName :</label>
                <input className='inputOne input1' type="text" id="firstname" name="firstname" required/>
            </div>
            <div className='inputName'>
                <label className='labelOne' htmlFor="lastName">Lastname :</label>
                <input
                className='inputOne input2'
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>
              <div className='inputName'>
                  <label className='labelOne' htmlFor="salary">Salary ($) :</label>
                  <input className='inputOne input3'
                    type="number"
                    id="salary"
                  />
                </div>
              <div className='inputName'>
                  <label className='labelOne' htmlFor="dateOfBirth">Date of Birth :</label>
                  <input className='inputOne'
                    id="dateOfBirth"
                    type="date"
                  />
                </div>

              
        </form>
        </div>


        <div className='second'>
        <div className='inputName'>
                  <label className='labelOne' htmlFor="Select">Select a level :</label>
                  <select
                   className='inputOne input5'
                    name="filter"
                    id="filter"
                  >
                    <option value="Junior">Junior</option>
                    <option value="Middle">Middle</option>
                    <option value="Senior">Senior</option>
                  </select>
        </div>

        <div className='inputName'>
                  <label className='labelOne' htmlFor="typeOfJob">Type of job :</label>
                  <select
                   className='inputOne input4'
                    name="typeOfJob"
                    id="typeOfJob"
                    >
                    <option value="UX/UI Designer">UX/UI Designer</option>
                    <option value="Front-end Developer">
                      Front-end Developer
                    </option>
                    <option value="Back-end Developer">
                      Back-end Developer
                    </option>
                    <option value="Security Analyst">Security Analyst</option>
                    <option value="Full-stack Developer">
                      Full-stack Developer
                    </option>
                    <option value="Game Developer">Game Developer</option>
                  </select>
        </div>
        <button className='mainbtn'>Add</button>
        </div>
    </div>
  )
}

export default AddTo