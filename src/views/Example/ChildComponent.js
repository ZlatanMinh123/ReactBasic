import React from "react";

// class ChildComponent extends React.Component {

//     render() {
//         // console.log('>> check props: ', this.props)
//         let {name, age, address, arrJobs} = this.props
//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             </>
//         );
//     }
// }

const ChildComponent = (props) => {
    let { name, age, address, arrJobs } = props;
    return (
        <>
            <div className="job-lists">
                {arrJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

// Sd export để dùng file này bên trong file App.js
export default ChildComponent;
