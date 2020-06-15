import Doctor from "../Model/doctorDetail";
import DoctorType from "../Model/DoctorType";

export const DOCTORTYPE = [
  new DoctorType("p5", "All"),
  new DoctorType("p1", "Social"),
  new DoctorType("p2", "Surgon"),
  new DoctorType("p3", "Physician"),
  new DoctorType("p4", "Dentist")
];

export const DOCTOR = [
  new Doctor(
    "p1",
    "Muhammad Husnain",
    "https://cdn4.vectorstock.com/i/1000x1000/74/58/faceless-businessman-portrait-icon-image-vector-14807458.jpg",
    "Social",
    29.99
  ),
  new Doctor(
    "p2",
    "Muhammad Muzzammil",
    "https://image.shutterstock.com/image-photo/faceless-person-portrait-260nw-133296158.jpg",
    "Surgon",
    31
  ),
  new Doctor(
    "p3",
    "Muhammad Asim",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8wAWCdTS6gjj0cqA82ToMN9hpX8aKatpPPejoB8wO_Kftn6Cg&usqp=CAU",
    "Physician",
    35.55
  ),
  new Doctor(
    "p4",
    "Muhammad Husnain",
    "https://p7.hiclipart.com/preview/835/539/667/physician-clinic-surgeon-dentist-health-dr-clipart-thumbnail.jpg",
    "Social",
    29.99
  ),
  new Doctor(
    "p5",
    "Muhammad Muzzammil",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8oGwHlFHK7xdE56l06P8bzBB5PPynxDyPQ1h40z94fSCiH6Hh&usqp=CAU",
    "Surgon",
    31
  ),
  new Doctor(
    "p6",
    "Muhammad Asim",
    "https://cdn2.vectorstock.com/i/1000x1000/30/81/faceless-male-doctor-icon-image-vector-15343081.jpg",
    "Physician",
    35.55
  ),
  new Doctor(
    "p7",
    "Muhammad Husnain",
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "Social",
    29.99
  ),
  new Doctor(
    "p8",
    "Muhammad Muzzammil",
    "https://cdn1.vectorstock.com/i/1000x1000/97/25/man-faceless-avatar-vector-15899725.jpg",
    "Surgon",
    31
  ),
  new Doctor(
    "p9",
    "Muhammad Asim",
    "https://cdn4.vectorstock.com/i/1000x1000/18/58/color-silhouette-cartoon-half-body-faceless-man-vector-15091858.jpg",
    "Physician",
    35.55
  )
];
