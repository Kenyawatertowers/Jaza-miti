// import React from 'react'
import "./Species.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import useFetch from "../../hooks/useFetch";

const Species = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.gbif.org/v1/species/search"
  );
  console.log(data);

  if (isLoading) return <h3>LOADING...</h3>;

  if (error) return <h3>Error: Something went wrong</h3>;
  return (
    <div className="species">
      <Sidebar />
      <div className="speciesContainer">
        <Navbar />
        <div className="map">
          <div className="input">
            <SearchRoundedIcon />
            <input type="text" placeholder="Search location..." />
          </div>
          <div className="navigation">
            <img
              className="img"
              src="https://www.mappr.co/wp-content/uploads/2021/01/image-237.jpeg"
              alt=""
            />
            <div className="oom">
              <AddRoundedIcon />
              <RemoveRoundedIcon />
            </div>
          </div>
        </div>

        <h2 className="number">Species</h2>
        <div className="types">
          <div className="flex-container">
            <div className="type">
              <h2 className="title">Acacia polyacantha</h2>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h2 className="title">Albiia gummifera</h2>
              <span>Common names:</span>
              <span className="local">
                Mcani Mbao(Swahili), Methia(Kamba), Mukurue(Kikuyu,Meru),
                Seyet(Kisigis, Nandi), Omugonjoro(Kisii), Mukhonuli(Luhya),
                Sogore(Samburu), Set(Marakwet, Tugen), Olesepakupes(Maasai),
                Kiririgwi(Taveta), Ekwokwait(Turkana), Msarawachi(Taita)
              </span>
            </div>

            <div className="type">
              <h2 className="title">Alia lebbeck</h2>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h2 className="title">casuarina cinninghamiana!!</h2>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>
          </div>
        </div>

        <h3 className="number">Seedlings</h3>
        <div className="types">
          <div className="flex-container">
            <div className="type">
              <h3 className="title">Acacia polyacantha</h3>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h3 className="title">Albiia gummifera</h3>
              <span>Common names:</span>
              <span className="local">
                Mcani Mbao(Swahili), Methia(Kamba), Mukurue(Kikuyu,Meru),
                Seyet(Kisigis, Nandi), Omugonjoro(Kisii), Mukhonuli(Luhya),
                Sogore(Samburu), Set(Marakwet, Tugen), Olesepakupes(Maasai),
                Kiririgwi(Taveta), Ekwokwait(Turkana), Msarawachi(Taita)
              </span>
            </div>

            <div className="type">
              <h3 className="title">Alia lebbeck</h3>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h3 className="title">casuarina cinninghamiana!!</h3>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>
          </div>
        </div>

        <h4 className="number">Indeginous</h4>
        <div className="types">
          <div className="flex-container">
            <div className="type">
              <h4 className="title">Acacia polyacantha</h4>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h4 className="title">Albiia gummifera</h4>
              <span>Common names:</span>
              <span className="local">
                Mcani Mbao(Swahili), Methia(Kamba), Mukurue(Kikuyu,Meru),
                Seyet(Kisigis, Nandi), Omugonjoro(Kisii), Mukhonuli(Luhya),
                Sogore(Samburu), Set(Marakwet, Tugen), Olesepakupes(Maasai),
                Kiririgwi(Taveta), Ekwokwait(Turkana), Msarawachi(Taita)
              </span>
            </div>

            <div className="type">
              <h4 className="title">Alia lebbeck</h4>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>

            <div className="type">
              <h4 className="title">casuarina cinninghamiana!!</h4>
              <span>Common names:</span>
              <span className="local">
                Falcon's-claw acacia(English), Mkengewa(Bajun), Kivovoa(Kamba),
                Kumukokwe(Bukusu), Ogongo(Luo), Mkengewa(Swahili)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
