const asyncHandler = require('express-async-handler')
const axios = require('axios')
const { URL, MOVIE_KEY } = require('../utils/constant')

exports.getTrendingMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/trending/all/day?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getVideos = asyncHandler(async (req, res) => {
  axios
    .get(`${URL}/movie/${req.params.id}/videos?api_key=${MOVIE_KEY}`)
    .then(({ data }) => {
      res.json({ success: true, data: data.results[0] })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getMovieDetails = asyncHandler(async (req, res) => {
  axios
    .get(`${URL}/movie/${req.params.id}?api_key=${MOVIE_KEY}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getMovieGenres = asyncHandler(async (req, res) => {
  axios
    .get(`${URL}/genre/movie/list?api_key=${MOVIE_KEY}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.searchMovies = asyncHandler(async (req, res) => {
  const page = req.query.page
  const keyword = req.query.keyword

  axios
    .get(
      `${URL}/search/movie?api_key=${MOVIE_KEY}&query=${keyword}&page=${
        page ? page : 1
      }`
    )
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getPopularMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/movie/popular?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getLatestMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/movie/popular?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getNowMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(
      `${URL}/movie/now_playing?api_key=${MOVIE_KEY}&page=${page ? page : 1}`
    )
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getUpcomingMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/movie/upcoming?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getTopMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/movie/top_rated?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getMovieReviews = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(
      `${URL}/movie/${req.params.id}/reviews?api_key=${MOVIE_KEY}&page=${
        page ? page : 1
      }`
    )
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getMovies = asyncHandler(async (req, res) => {
  const page = req.query.page

  axios
    .get(`${URL}/discover/movie?api_key=${MOVIE_KEY}&page=${page ? page : 1}`)
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})

exports.getMoviesByGenre = asyncHandler(async (req, res) => {
  const page = req.query.page
  const genre = req.query.genre

  axios
    .get(
      `${URL}/discover/movie?api_key=${MOVIE_KEY}&with_genres=${genre}&page=${
        page ? page : 1
      }`
    )
    .then(({ data }) => {
      res.json({ success: true, data })
    })
    .catch((err) =>
      res.json({
        success: false,
        message: 'Terjadi masalah, coba lagi nanti.',
        // error: err.response,
      })
    )
})
