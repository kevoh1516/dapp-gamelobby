import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient()
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json())

app.put('/uploadColors', async (req, res) => {
  const { colors, uid } = req.body;

  const upsertColor = await prisma.color.upsert({
    where: {
      id: uid,
    },
    update: {
      ...colors
    },
    create: {
      id: uid,
      ...colors
    },
  })

  res.json(upsertColor)
});

app.get('/getColors', async (req, res) => {
  const { uid } = req.query;
  console.log("req params", req.query);

  const colors = await prisma.color.findUnique({
    where: {
      id: uid,
    },
  })

  res.json(colors);
})
