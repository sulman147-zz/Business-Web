import React from 'react';
import {ButtonGroup,Button} from 'react-bootstrap';
import { Container, Row, Col }from 'react-bootstrap';
import {FaAngleDoubleLeft,FaAngleDoubleRight,FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import Slider  from "react-slick";
import  '../styles/product.scss';




class Pagination extends React.Component {
  constructor(props) {
      super(props);
      this.state = { pager: {} };
  }

  componentWillMount() {
      // set page if items array isn't empty
      if (this.props.items && this.props.items.length) {
          this.setPage(this.props.initialPage);
      }
  }

  componentDidUpdate(prevProps, prevState) {
      // reset page if items array has changed
      if (this.props.items !== prevProps.items) {
          this.setPage(this.props.initialPage);
      }
  }

  setPage(page) {
      var items = this.props.items;
      var pager = this.state.pager;

      if (page < 1 || page > pager.totalPages) {
          return;
      }

      // get new pager object for specified page
      pager = this.getPager(items.length, page);

      // get new page of items from items array
      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      // update state
      this.setState({ pager: pager });

      // call change page function in parent component
      this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
      // default to first page
      currentPage = currentPage || 1;

      // default page size is 10
      pageSize = pageSize || 10;

      // calculate total pages
      var totalPages = Math.ceil(totalItems / pageSize);

      var startPage, endPage;
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      // calculate start and end item indexes
      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }

  render() {
      var pager = this.state.pager;

      if (!pager.pages || pager.pages.length <= 1) {
          // don't display pager if there is only 1 page
          return null;
      }

      return (
          <ul className="pagination">
              <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                  <a onClick={() => this.setPage(1)}> <FaAngleDoubleLeft size="1.1em"/> First</a>
              </li>
              <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                  <a onClick={() => this.setPage(pager.currentPage - 1)}><FaAngleLeft size="1.1em"/> Previous</a>
              </li>
              {pager.pages.map((page, index) =>
                  <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                      <a onClick={() => this.setPage(page)} >{page}</a>
                  </li>
              )}
              <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                  <a onClick={() => this.setPage(pager.currentPage + 1)}>Next <FaAngleRight size="1.1em"/></a>
              </li>
              <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                  <a onClick={() => this.setPage(pager.totalPages)}>Last <FaAngleDoubleRight size="1.1em"/></a>
              </li>
          </ul>
      );
  }
}

export default class Products extends React.Component {

    constructor(){
      
        super();
        this.product = [ ];
        var exampleItems = this.product.map(i => ({ id: (i+1), name:   (i+1) }));
        this.state = {
          exampleItems: exampleItems,
          pageOfItems: [],
          heading:''
      };
      this.onChangePage = this.onChangePage.bind(this);
    }

   
    onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }

  
      handleClickIndustrial=() => {
        this.product=
        ['ACID ACETIC (Glacial)','ACID HYDROCHLORIC, Commercial, E.P','ACID HYDROFLOURIC','ACID NITRIC, Commercial, E.P.','ACID PHOSPHORIC 75%, 85% (Tech.), 85% (Food Grade)','ACID SULPHONIC 90%, 96%',
                  'ACID SULPHURIC Comm, Electrolyte, E.P.','ACID TARTARIC, Powder, Lumps','ACRYLAMIDE','AEROSIL-200 (FUMED SILICA)','ACTIVATED CARBON, Powder & Granular','ALUMINIUM HYDROXIDE',
                  'ALUMINIUM POTASSIUM SULPHATE','ALUMINIUM STEARATE','ALUMINIUM SULPHATE (Powder, Crystals, Lumps)',  'AMMONIUM CHLORIDE Commercial, E.P. Powder',  'AMMONIA LIQUOR Commercial, E.P. 18-33% ((AMMONIUM HYDROXIDE))','AMMONIUM BICARBONATE Edible','AMMONIUM BICHROMATE Powder, Crystals',  
                  'AMMONIUM PER SULPHATE','AMMONIUM SULPHATE','ANTIFOAM', 'ANTIMONY TRIOXIDE', 'ARSENIC Powder',  'ASBESTOS',  'ASCORBIC ACID (VITAMIN C)',  'BARIUM CARBONATE',  'BARIUM CHLORIDE',  'BARIUM NITRATE',  'BARIUM PEROXIDE',  'BARIUM SULPHATE Precipitated, X-Ray Grade',  
                  'BARIUM SULPHIDE','BEE’S WAX','BENTONITE CLAY','BENZOIC ACID B.P., Commercial',  'BLEACHING Powder & Liquid',  'BORAX (SODIUM BORATE)',  'BORIC ACID B.P.',  'BUTYL ACETATE',  'BUTYL GLYCOL (ETHYLENE GLYCOL MONOBUTYL ETHER)',  'CADMIUM SULPHIDE',
                  'CALCIUM CARBONATE Precipitated, Light','CALCIUM CHLORIDE Flakes, Fused','CALCIUM GLUCONATE','CALCIUM HYPOCHLORITE (BLEACHING POWDER)','CARBOLIC ACID (Phenol Ice Crystals)','CARBOXY METHYL CELLULOSE (Commercial/Edible)','CARNOBA WAX','CARODHA WAX','CASE HARDENING COMPOUND','CAUSTIC SODA','CETO STEARYIL ALCOHOL','CHINA CLAY Powder, Light','CHLOROFORM Commercial & Pure','CHROMIC ACID','CITRIC ACID B.P. (Anhydrous & Monohydrate)','COBALT CHLORIDE','COBALT OXIDE','COBALT SULPHATE','COPPER SULPHATE Powder & Lumps','CREAM OF TARTAR Edible','CRESYLIC ACID','CRESYLIC CREASOTE (Creosote Oil)','CRYOLITE SYNTHETIC','CYCLOHEXANONE','CYCLOHEXYLAMINE','DDVP','DENTAL','DETERGENTS Powder & Liquid','DEXTRIN White & Yellow','DEXTROSE','DICALCIUM PHOSPHATE','DIETHYLENE GLYCOL',
 'DISODIUM PHOSPHATE',
 'DISTILLED WATER',
 'EDTA DI SODIUM',
 'FERRIC AMMONIUM CITRATE',
 'FERRIC CHLORIDE',
 'FERROUSE SULPHATE',
 'FILTER AID',
 'FORMALDEHYDE',
 'FORMIC ACID',
 'FULLER’S EARTH',
 'GELATINE Commercial Edible',
 'GLASS POWDER',
 'GLUCOSE Powder & Liquid',
 'GLUE POWDER',
 'GLYCERINE',
 'GMS (Glycerine Mono Stearate)',
 'GRAPHITE B.P.',
 'GUAR GUM (Super Col)',
 'GUM ACACIA',
 'GUM ROSIN',
 'GYPSUM POWDER',
 'H.E.C. (NITROSOL)',
 'HEXAMINE',
 'HI FLO SUPER CEL',
 'HUMIC ACID',
 'HYDROGEN PER OXIDE (35%, 50%)',
 'HYDROQUINONE',
 'HYPO',
 'ION EXCHANGE RESIN (Cation & Anion)',
 'IRON OXIDE Red, Yellow',
 'TRICHLORO ISO CYANURIC ACID (TCCA) (Chlorine Tablets/Granular)',
 'ISO PROPYL ALCOHOL (IPA)',
 'LACTIC ACID',
 'LACTOSE',
 'LATEX',
 'LEAD ACETATE',
 'LEAD NITRATE',
 'LEAD OXIDES Litharge & Red Leads',
 'LIME STONE',
 'LIQUID PARAFFIN',
 'LITHARGE',
 'LITHOPHONE',
 'LUDIGOL',
 'MAGNESIUM CARBONATE Light',
 'MAGNESIUM CHLORIDE',
 'MAGNESIUM OXIDE',
 'MAGNESIUM STEARATE',
 'MAGNESIUM SULPHATE Epsom Salt',
 'MANGANESE DI OXIDE Electrolyte',
 'MANGANESE SULPHATE',
 'MARBLE POWDER',
 'METHYLENE CHLORIDE (Dichloromethane)',
 'METOL',
 'MONO SODIUM GLUTAMATE (MSG), Ajinomoto',
 'MONO SODIUM PHOSPHATE',
 'MUNSELL',
 'NITRIC ACID',
 'NITROBENZENE',
 'OLEIC ACID',
 'OLIVE OIL (EXTRA VIRGIN, POMACE)',
 'OXALIC ACID',
 'PARAFORMALDEHYDE',
 'PARAPHENYLENE DIAMINE (PPDA)',
 'PEARL GLUE',
 'PERCHLOROETHYLENE (PERCHLONE)',
 'PETROLEIUM JELLY White',
 'PHENYL',
 'PHOSPHORIC ACID (75%, 85% (FOOD, TECH))',
 'POLYVINYL ACETATE',
 'POLYVINYL ALCOHOL (PVA-217, BP-26)',
 'POTASSIUM BICHROMATE',
 'POTASSIUM BROMIDE B.P.',
 'POTASSIUM CARBONATE',
 'POTASSIUM CHLORIDE (96%, 98%)',
 'POTASSIUM CITRATE B.P.',
 'POTASSIUM HYDROXIDE Flakes, Fused, E.P.',
 'POTASSIUM IODIDE B.P.',
 'POTASSIUM METABISULPHITE',
 'POTASSIUM NITRATE (Saltpetre)',
 'POTASSIUM PER SULPHATE',
 'POTASSIUM SULPHATE',
 'PROPYLENE GLYCOL',
 'RONGALITE',
 'SODIUM SACCHARIN B.P.',
 'SELENIUM POWDER',
 'SALICYLIC ACID',
 'SHAMPOO BASE (SLES)',
 'SILICA GEL White/Blue',
 'SILVER NITRATE',
 'SINGLE SUPER PHOSPHATE (14%, 18%)',
 'SODIUM ACETATE',
 'SODIUM ALGINATE',
 'SODIUM BENZOATE B.P.',
 'SODIUM BI CARBONATE',
 'SODIUM BI CHROMATE',
 'SODIUM BI SULPHATE (Cut Work)',
 'SODIUM CARBONATE (SODA ASH)',
 'SODIUM CHLORIDE',
 'SODIUM CHLORITE',
 'SODIUM CITRATE',
 'SODIUM CYANIDE',
 'SODIUM FERROCYANIDE',
 'SODIUM FLOURIDE',
 'SODIUM FORMATE',
 'SODIUM GLUCONATE',
 'SODIUM HEXAMETAPHOSPHATE (Calgon-S)',
 'SODIUM HYDROSULPHITE (RUNG KAT)',
 'SODIUM HYDROXIDE (Commercial, E.P.)',
 'SODIUM HYPOCHLORITE (LIQUID BLEACH)',
 'SODIUM LAURYL SULPHATE(SLS)',
 'SODIUM METABISULPHITE',
 'SODIUM NITRATE',
 'SODIUM NITRITE',
 'SODIUM PER SULPHATE',
 'SODIUM PERBORATE',
 'SODIUM POTASSIUM TARTARATE',
 'SODIUM SALICYLATE',
 'SODIUM SILICATE',
 'SODIUM SILICOFLOURIDE',
 'SODIUM SULPHATE (Glauber Salt)',
 'SODIUM SULPHIDE',
 'SODIUM SULPHITE',
 'SODIUM TRIPOLY PHOSPHATE(STPP)',
 'SORBITOL',
 'SOYA LECETHIN',
 'STARCH',
 'STEARIC ACID (Powder & Slabs, single/double/triple press)',
 'STRONTIUM CARBONATE',
 'STRONTIUM NITRATE',
 'SULPHAMIC ACID',
 'SULPHONIC ACID (90%, 96%)',
 'SULPHUR (Lumps, Powder, Roll, Amla sur)',
 'SULPHUR BENTONITE',
 'TALCUM POWDER',
 'TANNIC ACID',
 'TARTARIC ACID B.P.',
 'TIN CHLORIDE (Stannous Chloride)',
 'TITANIUM DIOXIDE Anatase Rutile',
 'TRICHLOROETHYLENE (TRICHLONE)',
 'TRIETHANOLAMINE(TEA)',
 'TRISODIUM PHOSPHATE (TSP)',
 'TURKEY RED OIL',
 'UREA Formaldehyde',
 'VERAFOAM-D',
 'WAX Parrafine',
 'XYLENE',
 'ZINC CARBONATE',
 'ZINC CHLORIDE',
 'ZINC DUST',
 'ZINC OXIDE',
 'ZINC PHOSPHIDE',
 'ZINC STEARATE',
 'ZINC SULPHATE (POWDER, GRANULAR)'

         ]
         var exampleItems = this.product.map(i => ({ id: (i+1), name:   (i+1) }));
         this.setState({ exampleItems: exampleItems ,heading:'Industrial'});
         
        }

      handleClickSelf=() => {
        this.product= ['OCD-7X Liquid Concentrate Air Cooler Cleaner----For Choked Copper Fins'
           ,'GLC-5R Liquid Concentrate Air Cooler Cleaner----For Choked Aluminium Fins'
           ,'OCD-4 Liquid Concentrate Carbon Cleaner Engine Parts Cleaner. All metals safe'
           ,'GLC-7 Liquid Concentrate Engine Jackets Cleaner For In-Situ Cleaning of Jacket Water Cooling Circuit'
           ,'DISC-CLEAN - Two Step Cleaning Package For Cleaning of Fuel / Lube Oil Purifier Discs'
           ,'ELEKTRO-KLEEN Liquid Concetrate Evaporative CleanerFor Electrical Motor & Parts Cleaning'
           ,'CDI Liquid Concentrate Heat Exchanger Cleaner (Deposit specific)'
           ,'CDI-Al Br Liquid Concentrate Heat Exchanger Cleaner (Deposit specific)'
           ,'CDI-CHX Liquid Concentrate Heat Exchanger Cleaner (Deposit specific)'
           ,'CDI-RX Liquid Concentrate Cleaner For Engine Liners / Heads & Heat Exchangers For removal of Rustful scale deposits of sea water or fresh water'
           ,'CDI-CS Liquid Concentrate Cleaner For Engine Liners / Heads & Heat Exchangers where carbon steels & cast irons are particular metals'
           ,'CDI-R Liquid Concentrate Heat Exchangers Cleaner For Removal of tough deposits of sea water & fresh water'
           ,'CDI-B Liquid Concentrate Boiler Cleaner'
           ,'CDI-OBX Liquid Concentrate Liquid Deruster for steel metal parts / sheet metal parts'
           ,'SD-101 Liquid Concentrate Liquid Deruster for S.S metal parts / sheet metal parts to remove chrome oxide & rust'
           ,'SD-102P Paste Deruster Paste For S.S Weld Seam Cleaning For Localized Derusting on Steel Structure / components'
           ,'OCD-11X Liquid Concentrate Fuel Injector Cleaner'
           ,'CDI-SS Al Liquid Concentrate Heat Exchanger Cleaning S.S & Alumunium specific base materials'
           ,'ALC-5 Liquid Concentrate A.C Fin-Coil Cleaner----For In-Place Cleaning'
           ,'CDI-T Liquid Concentrate Cooling Tower Fills Cleaner'
           ,'CDI-P Liquid Concentrate All Metal Safe Descaler including zinc, galvanized iron & aluminium '
           ,'RDO-11 Liquid Concentrate Rust Penetrating Oil for Loosening Jammed Partsing'
           ,'OTC-77 Liquid Concentrate Tank Cleaner & for Degreasing, Desludging of various jobs / parts'
           ,'OSD-NATURAL Liquid Concentrate Oil Spill Dispersant & Tank Cleaner (Natural Cleaner, free of all solvents & detergents)'
           ,'RDR OTC-77 Emulsion Liquid Runway Rubber Deposit Remover Also for Localized Degreasing Desludging of metal parts and concrete floors'
           ,'OTC-71 Liquid Concentrate Automatic Machine Degreaser'
           ,'KWIK-KLEEN Liquid Concentrate Hand Cleaner'
           ,'XR-5CS Powder Premix Passivator / Conditioner For Post-Cleaning Anti-Rust Treatment & For Hydro-Static Static Testing Corrosion Inhibitor Liquid'
           ,'XR-1 Liquid Concentrate Neutralizer For Post-Cleaning neutralization & Residue Cleaning'
           ,'LP-9 Liquid Anti Rust Oily Preserver for Metal Parts'
           ,'WIDETREAT Powder Premix Corrosion Inhibitor----For Closed Circuit Systems'
           ,'DYNOTREAT Powder Premix Corrosion Inhibitor For Open Circuit Systems'
           ,'RUST SEIZE Liquid Rust Seizing Compound Single Component.Stops growth of rust to prevent from aging effects.For Steel Structure / Installations and storage parts'
           ,'XR-11 CORROSION SEALER Single Component Pre-Paint metal surface sealing systems For prevention from under paint corrosion'
           ,'XR-10 CLEAR COAT (Water Dilutable) Single Component Corrosion Resistant Coating for Finned Air Coolers For all ferrous and non-ferrous metals'
           ,'XR-12 CLEAR COAT (Evaporative) Single Component Corrosion Resistant Coating for Finned Air Coolers For all ferrous and non-ferrous metals '
           ,'XR-11 RUST CONVERTER Pre-paint Rust Converter Single Component For all ferrous metals'
          ]
          var exampleItems = this.product.map(i => ({ id: (i+1), name:   (i+1) }));
         this.setState({ exampleItems: exampleItems ,heading:'Self manufactured'
        }
        );
      }
      handleClickJanitorial=() => {
        this.product=['Adhensive Removers',
                  'All purpose Cleaners',
                  'Bathroom Cleaners',
                  'Carpet & Upholstery Cleaners',
                  'Contact Cleaners',
                  'Degreasers',
                  'Dishwashing Spoaps, Detergents, and Rinses',
                  'Disinfectants and Sanitizers',
                  'Drain Cleaners and Maintainers',
                  'Etchants,Rust an Lime Removers',
                  'Furniture Polish and Dust Mop Treatments',
                  'Glass Clraners',
                  'Graffiti Removers',
                  'Grill,Range,and Oven Cleaners',
                  'Hard Floor Cleaners, Finishers, and Strippers',
                  'Laundry Detergents and Fabric Softeners',
                  'Metal Polish and Stone Care',
                  'Mold Killers and Mildew Removers',
                  'Odor Control',
                  'Pool and Spa Chemicals',
                  'Portion Control System Chemicals',
                  'Wastewater Treatment and Bioaugmentation',
                  'Wet Cleaning Wipes and Dispensers',
                  'Wood Cleaners'
        ]
        var exampleItems = this.product.map(i => ({ id: (i+1), name:   (i+1) }));
         this.setState({ exampleItems: exampleItems ,heading:'Janitorial and Cleaning products'
        
        }
        );
      }
      handleClickCosmetic=() => {
        this.product=['Medmuls Sx (Emulsifying Wax)',
                  'Cetyl Palmitate',
                  'C12-15 Alkyl Benzoate',
                  'Lipowax Pr (Stand Alone Emulsifying Wax)',
                  'Lipowax R2 (Stand Alone Emulsifying Wax)',
                  'Ammonium Laureth Sulfate 70%',
                  'Protelan Agl',
                  'Protelan Ls',
                  'Liponate Gc (Moisture Control)',
                  'Evoil Apricort Kernel',
                  'Evoil Avocado (Avocado Oil)',
                  'Evoil Almond(Sweet Almond Oil)',
                  'Evoil Grapeseed( Grape Seed Oil)',
                  'Evoil J Clear(Jojoba Oil Clear)',
                  'Evoil Spa Tea Tree Oil( Anti Acne)',
                  'Evoil Sesame Ms(Sesame Oil)',
                  'Evoil Rosehip Refined(Rose Hip Oil)',
                  'Evoil Sunflower (Sunflower Oil)',
                  'Evoil Wheat Germ Oil(Wheat Germ Oil)',
                  'Egms',
                  'Egds',
                  'IsoPropyl Phenol',
                  'Ammonium Persulfate',
                  'Potassium Persulfate',
                  'Dmdm Hydantoin (Liquid & Powder)',
                  'Saligin Mp (Methyl Paraben)',
        ]
        var exampleItems = this.product.map(i => ({ id: (i+1), name:   (i+1) }));
        this.setState({ exampleItems: exampleItems ,heading:'Cosmetic and pharma industry'
        }
        );
      }

      

    render() {


       
        // let items = this.state.items;
        // let heading =this.state.heading
        var settings = {
            arrows:false,
            autoplay:true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            
          };

          
        return (
            <div className="products">
            <Container>
            <Row >
                <Col xs="12" lg="4" >
                <h1>Our Products</h1>
                </Col>
                <Col xs="12" lg="8" className="p-dec">
                  <p>Linear Alkyl Benzene Sulphonic Acid (LABSA) Dodecyl Benzene Sulphonic Acid (DBSA), 
                     or simply Sulphonic Acid are few of the several names given to a type of organic acid 
                     that can be represented by the general formula R–SO2 –OH, where ‘R’ is usually a 
                     hydrocarbon side chain.</p>
                </Col>
               </Row>  
           </Container>
          <div className="slider">
           <Slider {...settings}>
           <div className="sliderimg">
               <img width="100%" height="100%"
                   src="http://lahoreesschem.com/wp-content/uploads/2014/11/Emulsifying-Waxes-Emulsifier.png"
                   alt="First slide"
               />  <p>Emulsifying Waxes & Emusifier</p>
               
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Mild-Surfactants.png"
               alt="First slide"
               /><p>Mild Surfactantas</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Oils-Humectants.png"
               alt="First slide"
           /><p>Oils & Humectants</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Opecifier-Pearlescent.png"
               alt="First slide"
           /><p>Opecifier & Pearlescent</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Oxidizing-Agents.png"
               alt="First slide"
           /><p>Oxidizing & Agents</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Preservative-Anti-Irritant.png"
               alt="First slide"
           /><p>Preservative & Anti Irritant</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Rheology-Modifiers.png"
               alt="First slide"
           /><p>Rheology Modifiers</p>
           </div>
           <div className="sliderimg">
               <img  width="100%" height="100%"
               src="http://lahoreesschem.com/wp-content/uploads/2014/11/Sunscreen-Agents.png"
               alt="First slide"
           /><p>Sunscreen Agents</p>
           </div>
           <div className="sliderimg">
           <img  width="100%" height="100%"
           src="http://lahoreesschem.com/wp-content/uploads/2014/11/Whitening-Actives1.png"
           alt="First slide"
       /> <p>Whitening Actives</p>
       </div>
           
         </Slider>
         </div>
         


           <div className="camicals">
          
                
                
                  <ButtonGroup aria-label="Basic example" className="list-one"> 
                   <Button variant="warning" onClick={this.handleClickIndustrial}>Industrial Chemicals</Button>
                   <Button variant="warning" onClick={this.handleClickSelf }>Self manufactured</Button>
                   <Button variant="warning" onClick={this.handleClickJanitorial }>Janitorial and Cleaning products</Button>
                   <Button variant="warning" onClick={this.handleClickCosmetic }>Cosmetic and pharma industry</Button>
                  </ButtonGroup>

                  


                  
                    <div className="list-two">
                        <h1>{this.state.heading}</h1>
                        {this.state.pageOfItems.map(item =>
                            <li key={item.id}>{item.name}</li>
                        )}

                        </div>
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} /> 
           </div>
       
        
            </div>
        )
     }
    }
    
class List extends React.Component {
	render() {
    return (
      <ul>
      {this.props.items.map(function(item) {
				return <li key={item}>{item}</li>
			})}
      </ul>
    );  
  }
}