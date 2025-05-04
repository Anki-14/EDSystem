# from flask import Flask, Response, request, jsonify, send_file
# import cv2
# import numpy as np
# from deepface import DeepFace
# from flask_cors import CORS
# import io

# app = Flask(__name__)
# CORS(app)  # Allow frontend requests

# # Load face cascade
# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# @app.route('/detect-emotion', methods=['POST'])
# def detect_emotion():
#     if 'image' not in request.files:
#         return jsonify({"error": "No image uploaded"}), 400

#     image = request.files['image'].read()
#     npimg = np.frombuffer(image, np.uint8)
#     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

#     # Convert image to grayscale
#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#     # Detect faces
#     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     detected_emotions = []
#     for (x, y, w, h) in faces:
#         face_roi = img[y:y + h, x:x + w]

#         try:
#             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#             emotion = result[0]['dominant_emotion']
#         except:
#             emotion = "Unknown"

#         detected_emotions.append(emotion)

#         # Draw a bounding box & label
#         cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
#         cv2.putText(img, emotion, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

#     # Convert processed image to bytes
#     _, buffer = cv2.imencode('.jpg', img)
#     processed_image = io.BytesIO(buffer)

#     # Return the processed image with face boxes and emotions
#     return send_file(processed_image, mimetype='image/jpeg')

# if __name__ == '__main__':
#     app.run(debug=True)
#----------------------------------------------------

# from flask import Flask, Response, jsonify
# from flask_cors import CORS
# import cv2
# from deepface import DeepFace

# app = Flask(__name__)
# CORS(app)

# # Load OpenCV face detection model
# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# # Initialize video capture
# cap = cv2.VideoCapture(0)

# def generate_frames():
#     while True:
#         success, frame = cap.read()
#         if not success:
#             break

#         # Convert frame to grayscale
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#         rgb_frame = cv2.cvtColor(gray_frame, cv2.COLOR_GRAY2RGB)

#         # Detect faces
#         faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#         emotion_detected = "Unknown"
        
#         for (x, y, w, h) in faces:
#             # Extract face ROI
#             face_roi = rgb_frame[y:y + h, x:x + w]

#             try:
#                 # Perform emotion analysis
#                 result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#                 emotion_detected = result[0]['dominant_emotion']

#                 # Draw rectangle around face
#                 cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#                 cv2.putText(frame, emotion_detected, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

#             except Exception as e:
#                 print("Emotion detection error:", str(e))

#         # Encode frame to bytes
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_bytes = buffer.tobytes()
        
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

# @app.route('/video_feed')
# def video_feed():
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/get_emotion', methods=['GET'])
# def get_emotion():
#     return jsonify({"emotion": "Happy"})  # Replace with dynamic value later

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)
# ------------------------------------------------------------------------------------------

# from flask import Flask, Response, request, jsonify, send_file
# from flask_cors import CORS
# import cv2
# import numpy as np
# from deepface import DeepFace
# import io

# app = Flask(__name__)
# CORS(app)

# # Load OpenCV face detection model
# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# # Initialize video capture
# cap = cv2.VideoCapture(0)

# def generate_frames():
#     while True:
#         success, frame = cap.read()
#         if not success:
#             break

#         # Convert frame to grayscale
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#         rgb_frame = cv2.cvtColor(gray_frame, cv2.COLOR_GRAY2RGB)

#         # Detect faces
#         faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#         emotion_detected = "Unknown"
        
#         for (x, y, w, h) in faces:
#             # Extract face ROI
#             face_roi = rgb_frame[y:y + h, x:x + w]

#             try:
#                 # Perform emotion analysis
#                 result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#                 emotion_detected = result[0]['dominant_emotion']

#                 # Draw rectangle around face
#                 cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#                 cv2.putText(frame, emotion_detected, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

#             except Exception as e:
#                 print("Emotion detection error:", str(e))

#         # Encode frame to bytes
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_bytes = buffer.tobytes()
        
#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

# @app.route('/video_feed')
# def video_feed():
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/get_emotion', methods=['GET'])
# def get_emotion():
#     return jsonify({"emotion": "Happy"})  # Replace with dynamic value later

# # Manual Image Upload Route
# @app.route('/upload-emotion', methods=['POST'])
# def upload_emotion():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files['file'].read()
#     npimg = np.frombuffer(file, np.uint8)
#     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

#     # Convert image to grayscale
#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#     # Detect faces
#     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     detected_emotions = []
#     for (x, y, w, h) in faces:
#         face_roi = img[y:y + h, x:x + w]

#         try:
#             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#             emotion = result[0]['dominant_emotion']
#         except:
#             emotion = "Unknown"

#         detected_emotions.append(emotion)

#     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "No face detected"})

# @app.route('/detect-emotion', methods=['POST'])
# def detect_emotion():
#     if 'image' not in request.files:
#         return jsonify({"error": "No image uploaded"}), 400

#     file = request.files['image'].read()
#     npimg = np.frombuffer(file, np.uint8)
#     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

#     # Convert image to grayscale
#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#     # Detect faces
#     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     detected_emotions = []
#     for (x, y, w, h) in faces:
#         face_roi = img[y:y + h, x:x + w]

#         try:
#             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#             emotion = result[0]['dominant_emotion']
#         except:
#             emotion = "Unknown"

#         detected_emotions.append(emotion)

#     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "No face detected"})

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000, debug=True)

# ----------------------------------------------------------------------
# from flask import Flask, Response, request, jsonify
# from flask_cors import CORS
# import cv2
# import numpy as np
# from deepface import DeepFace
# import os
# from datetime import datetime
# from flask import send_from_directory


# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

# # Load OpenCV face detection model
# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# # Initialize video capture
# cap = cv2.VideoCapture(0)

# # Global variable to store the current emotion from real-time feed
# current_emotion = "Unknown"

# def generate_frames():
#     global current_emotion  # Let us update the global variable

#     while True:
#         success, frame = cap.read()
#         if not success:
#             break

#         # Convert frame to grayscale and RGB
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#         rgb_frame = cv2.cvtColor(gray_frame, cv2.COLOR_GRAY2RGB)

#         # Detect faces
#         faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#         emotion_detected = "Unknown"

#         for (x, y, w, h) in faces:
#             face_roi = rgb_frame[y:y + h, x:x + w]

#             try:
#                 result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#                 emotion_detected = result[0]['dominant_emotion']
#                 current_emotion = emotion_detected  # Update global emotion

#                 # Draw rectangle and label
#                 cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#                 cv2.putText(frame, emotion_detected, (x, y - 10),
#                             cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
#             except Exception as e:
#                 print("Emotion detection error:", str(e))

#         # Encode frame to bytes
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_bytes = buffer.tobytes()

#         yield (b'--frame\r\n'
#                b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

# user_history = []

# @app.route('/uploads/<filename>')
# def uploaded_file(filename):
#     return send_from_directory(UPLOAD_FOLDER, filename)


# @app.route('/history', methods=['GET'])
# def get_history():
#     return jsonify(user_history)

# UPLOAD_FOLDER = 'static/uploads'
# if not os.path.exists(UPLOAD_FOLDER):
#     os.makedirs(UPLOAD_FOLDER)

# @app.route('/video_feed')
# def video_feed():
#     return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/get_emotion', methods=['GET'])
# def get_emotion():
#     return jsonify({"emotion": current_emotion})

# # @app.route('/upload-emotion', methods=['POST'])
# # def upload_emotion():
# #     if 'file' not in request.files:
# #         return jsonify({"error": "No file uploaded"}), 400

# #     file = request.files['file']
# #     file_bytes = file.read()
# #     filename = datetime.now().strftime("%Y%m%d%H%M%S") + "_" + file.filename
# #     file_path = os.path.join(UPLOAD_FOLDER, filename)
# #     with open(file_path, 'wb') as f:
# #         f.write(file_bytes)

# #     # file.save(file_path)
# #     npimg = np.frombuffer(file_bytes, np.uint8)
# #     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

# #     file = request.files['file'].read()
# #     npimg = np.frombuffer(file, np.uint8)
# #     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

# #     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# #     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# #     detected_emotions = []
# #     for (x, y, w, h) in faces:
# #         face_roi = img[y:y + h, x:x + w]
# #         try:
# #             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
# #             emotion = result[0]['dominant_emotion']
# #         except:
# #             emotion = "Unknown"
# #         detected_emotions.append(emotion)

# #     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "No face detected"})


# # @app.route('/upload-emotion', methods=['POST'])
# # def upload_emotion():
# #     if 'file' not in request.files:
# #         return jsonify({"error": "No file uploaded"}), 400

# #     file = request.files['file']
# #     file_bytes = file.read()

# #     if not file_bytes:
# #         return jsonify({"error": "Empty file data"}), 400

# #     # Save image to disk
# #     filename = datetime.now().strftime("%Y%m%d%H%M%S") + "_" + file.filename
# #     file_path = os.path.join(UPLOAD_FOLDER, filename)
# #     with open(file_path, 'wb') as f:
# #         f.write(file_bytes)

# #     # Decode image from bytes
# #     npimg = np.frombuffer(file_bytes, np.uint8)
# #     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

# #     if img is None:
# #         return jsonify({"error": "Could not decode image"}), 400

# #     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# #     try:
# #         faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
# #     except Exception as e:
# #         print("Face detection error:", str(e))
# #         return jsonify({"error": "Face detection failed"}), 500

# #     if len(faces) == 0:
# #         return jsonify({"emotion": "No face detected"}), 200

# #     detected_emotions = []
# #     for (x, y, w, h) in faces:
# #         face_roi = img[y:y + h, x:x + w]
# #         try:
# #             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
# #             emotion = result[0]['dominant_emotion']
# #         except Exception as e:
# #             print("Emotion detection error:", str(e))
# #             emotion = "Unknown"
# #         detected_emotions.append(emotion)

# #     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "Unknown"})

# # user_history.append({
# #     "filename": filename,
# #     "emotion": detected_emotions[0] if detected_emotions else "Unknown",
# #     "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
# # })

# @app.route('/upload-emotion', methods=['POST'])
# def upload_emotion():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files['file']
#     file_bytes = file.read()

#     if not file_bytes:
#         return jsonify({"error": "Empty file data"}), 400

#     filename = datetime.now().strftime("%Y%m%d%H%M%S") + "_" + file.filename
#     file_path = os.path.join(UPLOAD_FOLDER, filename)
#     with open(file_path, 'wb') as f:
#         f.write(file_bytes)

#     npimg = np.frombuffer(file_bytes, np.uint8)
#     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

#     if img is None:
#         return jsonify({"error": "Could not decode image"}), 400

#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#     try:
#         faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
#     except Exception as e:
#         print("Face detection error:", str(e))
#         return jsonify({"error": "Face detection failed"}), 500

#     if len(faces) == 0:
#         return jsonify({"emotion": "No face detected"}), 200

#     detected_emotions = []
#     for (x, y, w, h) in faces:
#         face_roi = img[y:y + h, x:x + w]
#         try:
#             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#             emotion = result[0]['dominant_emotion']
#         except Exception as e:
#             print("Emotion detection error:", str(e))
#             emotion = "Unknown"
#         detected_emotions.append(emotion)

#     # Save to user history
#     user_history.append({
#         "filename": filename,
#         "emotion": detected_emotions[0] if detected_emotions else "Unknown",
#         "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#     })

#     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "Unknown"})


# @app.route('/detect-emotion', methods=['POST'])
# def detect_emotion():
#     if 'image' not in request.files:
#         return jsonify({"error": "No image uploaded"}), 400

#     # file = request.files['image'].read()
#     file = request.files['image'].read()
#     npimg = np.frombuffer(file, np.uint8)
#     img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
#     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

#     detected_emotions = []
#     for (x, y, w, h) in faces:
#         face_roi = img[y:y + h, x:x + w]
#         try:
#             result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
#             emotion = result[0]['dominant_emotion']
#         except:
#             emotion = "Unknown"
#         detected_emotions.append(emotion)

#     return jsonify({"emotion": detected_emotions[0] if detected_emotions else "No face detected"})

# if __name__ == '__main__':
    
#     app.run(host='0.0.0.0', port=5000, debug=True)
# ------------------------------------------------------------------------
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from deepface import DeepFace
import time
import os
from datetime import datetime
from flask import send_from_directory


app = Flask(__name__)
CORS(app)

# Load Haar Cascade model
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Global camera and flags
camera = None
is_camera_active = False
current_emotion = "Unknown"

# Real-Time Frame Generator
def generate_frames():
    global camera, current_emotion

    last_detection_time = 0

    while is_camera_active:
        success, frame = camera.read()
        if not success:
            break

        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        rgb_frame = cv2.cvtColor(gray_frame, cv2.COLOR_GRAY2RGB)

        faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        current_time = time.time()
        if current_time - last_detection_time >= 1.5:
            for (x, y, w, h) in faces:
                face_roi = rgb_frame[y:y + h, x:x + w]
                try:
                    result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
                    current_emotion = result[0]['dominant_emotion']
                except Exception as e:
                    print("Emotion detection error:", str(e))
            last_detection_time = current_time

        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(frame, current_emotion, (x, y - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

        _, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

# Start Video Feed
@app.route('/video_feed')
def video_feed():
    global camera, is_camera_active
    if not is_camera_active:
        camera = cv2.VideoCapture(0)
        is_camera_active = True
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

# Stop Video Feed
@app.route('/stop_video_feed', methods=['POST'])
def stop_video_feed():
    global camera, is_camera_active
    is_camera_active = False
    if camera:
        camera.release()
        camera = None
    return jsonify({"status": "stopped"})

# Get Current Emotion
@app.route('/get_emotion', methods=['GET'])
def get_emotion():
    return jsonify({"emotion": current_emotion})

UPLOAD_FOLDER = "uploads"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

history = []

# Manual Upload Emotion Detection
@app.route('/upload-emotion', methods=['POST'])
def upload_emotion():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    file_bytes = file.read()

    # Save image with timestamped name
    filename = f"{datetime.now().strftime('%Y%m%d%H%M%S')}_{file.filename}"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    with open(filepath, 'wb') as f:
        f.write(file_bytes)

    # Decode image for emotion detection
    npimg = np.frombuffer(file_bytes, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    detected_emotions = []
    for (x, y, w, h) in faces:
        face_roi = img[y:y + h, x:x + w]
        try:
            result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
            emotion = result[0]['dominant_emotion']
        except:
            emotion = "Unknown"
        detected_emotions.append(emotion)
        break  # Analyze only the first face

    final_emotion = detected_emotions[0] if detected_emotions else "No face detected"

    # Save to local history list (or database if needed)
    entry = {
        "image": f"/uploads/{filename}",  # this ensures the uploaded image is visible
        "emotion": final_emotion
    }
    history.append(entry)

    # Optional DB save
    # log = EmotionLog(
    #     emotion=final_emotion,
    #     mode="manual",
    #     filename=filename
    # )
    # db.session.add(log)
    # db.session.commit()

    return jsonify(entry)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(history)


# Optional: Additional API (can be removed if not used)
@app.route('/detect-emotion', methods=['POST'])
def detect_emotion():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image'].read()
    npimg = np.frombuffer(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    detected_emotions = []
    for (x, y, w, h) in faces:
        face_roi = img[y:y + h, x:x + w]
        try:
            result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
            emotion = result[0]['dominant_emotion']
        except:
            emotion = "Unknown"
        detected_emotions.append(emotion)

    return jsonify({"emotion": detected_emotions[0] if detected_emotions else "No face detected"})

# Run Server
if __name__ == '__main__':
    #app.run(host='0.0.0.0', port=5000, debug=True)
    port = int(os.environ.get('PORT', 5000))  # Use PORT from environment or fallback to 5000
    app.run(host='0.0.0.0', port=port, debug=True)
