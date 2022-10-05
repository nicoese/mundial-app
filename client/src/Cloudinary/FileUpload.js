const cloud_name = 'dlngrgksf';
const preset = 'mundiapp';

export const fileUpload = async (file) =>{
    // console.log('ENTRE  FILE UPL',file)
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset)

    try {
        const res = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) return null;

        const data = await res.json();

        // console.log('data',data)

        return data

    } catch (error) {
        return null;
    }
}