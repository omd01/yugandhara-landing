import CompLogo from "./CompLogo";


export default function CompLogosCard() {
  const icons_data = [
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504169/Yuga/Company%20Logos/Yugandhara_Foundation_nesbu5.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504166/Yuga/Company%20Logos/Yuga_Studios_bixo6l.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504171/Yuga/Company%20Logos/Mask_Production_gwcgqx.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504172/Yuga/Company%20Logos/Nikaay_u71ujk.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504171/Yuga/Company%20Logos/Envifuture_ks0rmj.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504169/Yuga/Company%20Logos/Yugandhara_Strategic_Holdings_1_zqhp6r.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504168/Yuga/Company%20Logos/YUGA_Weddings_p9pdhr.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504165/Yuga/Company%20Logos/YUGA_Sports_Entertainment_gyc9ki.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504165/Yuga/Company%20Logos/Yuga_Production_House_w3hxln.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504163/Yuga/Company%20Logos/YUGA_Hospitality_vwphur.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504162/Yuga/Company%20Logos/Useless_vn8okj.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504161/Yuga/Company%20Logos/TMS_dznucp.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504161/Yuga/Company%20Logos/TMS_Global_Kitchen_fqa8ss.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504161/Yuga/Company%20Logos/Urban_Farmer_yyirob.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504160/Yuga/Company%20Logos/The_Magic_Pan_c6m7ef.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504160/Yuga/Company%20Logos/SM_Consultancy_qbfrt4.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504159/Yuga/Company%20Logos/SIGA_bf7iav.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        {
            link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721504159/Yuga/Company%20Logos/Rooh_Photography_zz5hij.svg",
            alt: "Flowbite Logo",
            width: 150,
            height: 50,
        },
        
    ];
    
    return (
        icons_data.map((icon, index) => (
            <CompLogo
                key={index}
                link={icon.link}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
            />
        ))
    );
}