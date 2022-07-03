import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AlimentSchema = new Schema({
  alimGrpCode: {
    type: String,
  },
  alimSgrpCode: {
    type: String,
  },
  alimSSgrpCode: {
    type: String,
  },
  alimGrpNom: {
    type: String,
  },
  alimSgrpNom: {
    type: String,
  },
  alimSSgrpNom: {
    type: String,
  },
  alimCode: {
    type: String,
  },
  alimNom: {
    type: String,
  },
  energieKcal: {
    type: String,
  },
  eauG: {
    type: String,
  },
  proteinesG: {
    type: String,
  },
  glucidesG: {
    type: String,
  },
  lipidesG: {
    type: String,
  },
  sucresG: {
    type: String,
  },
  fructoseG: {
    type: String,
  },
  galactoseG: {
    type: String,
  },
  glucoseG: {
    type: String,
  },
  lactoseG: {
    type: String,
  },
  maltoseG: {
    type: String,
  },
  saccharoseG: {
    type: String,
  },
  amidonG: {
    type: String,
  },
  fibresAlimentairesG: {
    type: String,
  },
  polyolsTotauxG: {
    type: String,
  },
  alcoolG: {
    type: String,
  },
  acidesOrganiquesG: {
    type: String,
  },
  agSaturesG: {
    type: String,
  },
  agMonoinsaturésG: {
    type: String,
  },
  agPolyinsaturésG: {
    type: String,
  },
  agButyriqueG: {
    type: String,
  },
  agCaproiqueG: {
    type: String,
  },
  agCapryliqueG: {
    type: String,
  },
  agCapriqueG: {
    type: String,
  },
  agLauriqueG: {
    type: String,
  },
  agMyristiqueG: {
    type: String,
  },
  agPalmitiqueG: {
    type: String,
  },
  agSteariqueG: {
    type: String,
  },
  agOleiqueG: {
    type: String,
  },
  agLinoleiqueG: {
    type: String,
  },
  agAlphalinoleniqueG: {
    type: String,
  },
  agArachidoniqueG: {
    type: String,
  },
  agEpaG: {
    type: String,
  },
  agDhaG: {
    type: String,
  },
  cholesterolMg: {
    type: String,
  },
  selChlorureDeSodiumG: {
    type: String,
  },
  calciumMg: {
    type: String,
  },
  chlorureMg: {
    type: String,
  },
  cuivreMg: {
    type: String,
  },
  ferMg: {
    type: String,
  },
  iodeµg: {
    type: String,
  },
  magnesiumMg: {
    type: String,
  },
  manganeseMg: {
    type: String,
  },
  phosphoreMg: {
    type: String,
  },
  potassiumMg: {
    type: String,
  },
  seleniumµg: {
    type: String,
  },
  sodiumMg: {
    type: String,
  },
  zincMg: {
    type: String,
  },
  retinolµg: {
    type: String,
  },
  betaCaroteneµg: {
    type: String,
  },
  vitamineDµg: {
    type: String,
  },
  vitamineEmg: {
    type: String,
  },
  vitamineK1µg: {
    type: String,
  },
  vitamineK2µg: {
    type: String,
  },
  vitamineCmg: {
    type: String,
  },
  vitamineB1ThiamineMg: {
    type: String,
  },
  vitamineB2RiboflavineMg: {
    type: String,
  },
  vitamineB3PpNiacineMg: {
    type: String,
  },
  vitamineB5AcidePantotheniqueMg: {
    type: String,
  },
  vitamineB6Mg: {
    type: String,
  },
  vitamineB9FolatesTotauxµg: {
    type: String,
  },
  vitamineB12µg: {
    type: String,
  },
  iG: {
    type: String,
  },
});

const Aliment = mongoose.model('aliment', AlimentSchema);
export default Aliment;
