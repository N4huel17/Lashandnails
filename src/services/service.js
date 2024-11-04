const API_URL= 'http://localhost:3000/api/services';

export const getServices = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok){
        throw new Error("Error fetching services: " + response.statusText); // Más detalles en el error
      }
      const data = await response.json();
      console.log("Data fetched:", data); // Verificar la estructura de los datos
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error; // Re-lanzamos el error para que lo maneje el componente
    }
  };
export const getServicesById= async (id)=> {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Error fetching service');
      }
      return response.json();
    };

    export const createService = async (serviceData) => {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(serviceData),
        });
        if (!response.ok) {
          throw new Error('Error creating service');
        }
        return response.json();
      };

      export const updateService = async (id, serviceData) => {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(serviceData),
        });
        if (!response.ok) {
          throw new Error('Error updating service');
        }
        return response.json();
      };
      
      export const deleteService = async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error deleting service');
        }
      };