import personalized from "../../assets/others/personalized";

const getPersonalizedbyId = (id) => {
  const personalize = personalized.find((personalize) => personalize.id === id);

  if (!personalize) {
    return null;
  }

  return {
    ...personalize,
    images: personalize.imgs || [], 
  };
};

export default getPersonalizedbyId;
