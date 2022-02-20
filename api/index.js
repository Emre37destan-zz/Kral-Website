module.exports = {
    run: async function (req, res) {
        return res.status(200).json({
            message: "Bu API hala bata aşamasında, lütfen bulabildiğiniz hataları bildirin.",
            version: "0.0.1",
            endpoints: {
                "/api/logo": "Çeşitli boyutlarda bot logosunu veya avatarını alın.",
                "/api/status": "Botların durumunu döndürür"
            }
        });
    }
}