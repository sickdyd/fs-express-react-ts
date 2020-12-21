# Create docker image

```
docker build -t api:latest .
```

# Create docker tar file

```
sudo docker save api:latest | gzip > image.tar
```

# Copy image to Raspberry Pi

```
sudo scp image.tar pi@192.168.10.29:/home/pi/Desktop
```

# Run docker image (ssh in RPi)

```
docker run -p 3000:3000 api:latest
```
