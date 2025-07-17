FROM node:24

WORKDIR /kiranapp

COPY . .

RUN npm install

EXPOSE 3000

# Start the app with custom script
CMD ["npm", "Start"] 