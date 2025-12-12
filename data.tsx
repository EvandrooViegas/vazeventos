import { BiSpa } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuDroplet } from "react-icons/lu";
import { RiToothLine } from "react-icons/ri";
import { TbChartBubble, TbVirusOff } from "react-icons/tb";

const icon = <HiOutlineSpeakerphone />
const data = {
  number: "351936376566",
  name: "Sónia Eliana",
  email: "sonialeliana@gmail.com",
  icon,
  location: ["Lisboa", "Portugal"],
  working_hours: [
    { name: "Segunda-Sexta", hours: "11:30  – 7:30" },
    { name: "Sábado", hours: "10:00 – 19:30" },
    { name: "Domingo", hours: "10:00 – 18:00" },
  ],
  prices: [
    {
      name: "Avaliação Capilar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
      {
      name: "Detox Capilar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
     {
      name: "Queda de Cabelo/Alopecias",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
     {
      name: "Dermatite Seborreica",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
     {
      name: "Psóríase",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
     {
      name: "Caspa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
     {
      name: "Foliculite",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],

  status: [
    { text: "Casos de Sucesso", number: 55 },
    { text: "Cabelos Transformados", number: 55 },
    { text: "Anos de Expriência", number: 55 },
    { text: "Avaliações Positivas", number: 55 },
  ],
  reviews: [
    {
      name: "Joana",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
    {
      name: "Maria",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
    {
      name: "Roberta",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
      date: "2024-01-04",
    },
  ],
  socials: [
    { name: "facebook", url: "facebook.com" },
    { name: "instagram", url: "instagram.com" },
    { name: "TikTok", url: "tiktok.com" },
    { name: "email", url: "google.com" },
  ],
  services: [
    {
      title: "Laser",
      image_path: "/services/1.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Alta-Frequência",
      image_path: "/services/2.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },   
    {
      title: "Intradermoterapia",
      image_path: "/services/3.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }, 
    {
      title: "Terapia Ilibi",
      image_path: "/services/4.jpg",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }, 

  ],
  workers: [
    {
      name: "Lorem ipsum dolor sit amet",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img_path: "/workers/1.jpg",
        socials: [
            { name: "facebook", url: "google.com" },
            { name: "instagram", url: "google.com" },
            { name: "email", url: "google.com" },
        ]
    },
  ],
  skills: [
    {
      icon:  <BiSpa />,
      title: "Queda de Cabelo",
      description:
        "Conforme o tipo e a causa da alopecia, pode incluir vitaminas, terapia a laser, tratamentos de tricologia alternativos e desinflamação do couro cabeludo, através de método indolor e não cirúrgico.",
    },
    {
      icon: <TbChartBubble />,
      title: "Limpeza do terreno biológico",
      description:
        "Limpar o terreno e remover toxinas inclui a avaliação e foco no equilíbrio biológico para desinflamar o corpo.",
    },
    {
      icon: <TbVirusOff />,
      title: "Detox metais e Parasitas quântico",
      description:
        "Tratamento para eliminação de vermes, protozoários, parasitas e metais tóxicos no nosso organismo, para garantir o bom funcionamento do corpo.",
    },
    {
      icon:<LuDroplet />,
      title: "Infusão de Nutrientes",
      description:
        "Administração direta de nutrientes essenciais, como vitaminas, minerais, aminoácidos, fatores de crescimento e entre outros componentes benéficos para o seu caso específico.",
    },
  ],
  booking_url: "google.com",
  clients_number: 430,
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};
export default data;
